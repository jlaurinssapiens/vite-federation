import React from "react"

type TestProps = { 
  foo: string
  bar: string
}

const DDDDD = {
  foo: 'DEFAULT_FOO',
  bar: 'DEFAULT_BAR'
}

const Test = ({ foo = DDDDD.foo, bar = DDDDD.bar }: TestProps) => {
  return (
    <div>
      {`foo ${foo}, bar ${bar}`}
    </div>
  )
}

export { Test }