import { useCallback, useEffect, useState } from 'react'

interface Props<T> {
  initialValues: T
  validate?: (values: T) => Error<T>
}

interface State<T> {
  values: T
  isDirty: boolean
  errors: Error<T>
  touched: Record<keyof T, string | null>
}

type Error<T> = Record<keyof T, string>

const useForm = <T extends object>({
  validate,
  initialValues,
}: Props<T>) => {
  const initialState = {
    touched: {} as State<T>['touched'],
    errors: {} as State<T>['errors'],
    values: initialValues,
    isDirty: false
  }

  const [state, setState] = useState<State<T>>(initialState)

  // Settings values

  const clear = useCallback(() => setState(initialState), [])

  const setFields = useCallback((values?: T) => {
    setState((prev) => ({ ...prev, values: { ...prev.values, ...values } }))
  }, [])

  const handleChange = useCallback((name: keyof T, value: string) => {
    setState((prev) => ({ ...prev, values: { ...prev.values, [name]: value } }))
  }, [])

  const handleChangeText = useCallback((name: keyof T) => {
    return (value: string) => handleChange(name, value)
  }, [])

  // Settins errors

  const setErrors = useCallback((errors: Error<T>) => {
    setState((prev) => ({ ...prev, errors }))
  }, [])

  const setTouched = useCallback((name: keyof T) => {
    setState((prev) => ({
      ...prev,
      touched: { ...prev.touched, [name]: null }
    }))
  }, [])

  const handleBlur = useCallback((name: keyof T) => {
    return () => setTouched(name)
  }, [])

  const toggleDirty = useCallback((isDirty?: boolean) => {
    setState((prev) => ({
      ...prev,
      isDirty: typeof isDirty === 'boolean' ? isDirty : !prev.isDirty
    }))
  }, [])

  // Input props
  const inputProps = useCallback(
    (name: keyof T) => ({
      value: state.values?.[name],
      error: state.errors?.[name],
      isInvalid: !state.touched?.[name],
      onBlur: handleBlur(name),
      onChangeText: handleChangeText(name)
    }),
    [state]
  )
  // Validate Errors
  const hasErrors = useCallback((errors: Error<T>) => {
    return Object.keys(errors).length !== 0
  }, [])

  // OnSubmit middleware
  const onSubmit = useCallback(
    (cb: () => void) => {
      if (typeof validate === 'function') {
        toggleDirty(true)

        const newErrors = validate?.(state.values) as Error<T>

        if (hasErrors(newErrors)) {
          return setErrors(newErrors)
        }

        cb()

        return
      }

      cb()
    },
    [state.values]
  )

  useEffect(() => {
    if (state.isDirty) {
      if (typeof validate === 'function') {
        const newErrors = validate(state.values)
        setErrors(newErrors)
      }
    }
  }, [state.values, state.isDirty])

  useEffect(() => {
    return () => {
      clear()
      console.log('USEFORM_UNMOUNT')
    }
  }, [])

  return {
    values: state.values,
    errors: state.errors,
    touched: state.touched,
    hasErrors,
    clear,
    onSubmit,
    setFields,
    setErrors,
    setTouched,
    handleBlur,
    inputProps,
    toggleDirty,
    handleChange,
    handleChangeText,
  }
}

export default useForm
