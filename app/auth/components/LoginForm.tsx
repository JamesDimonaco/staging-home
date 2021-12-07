import { AuthenticationError, Link, useMutation, Routes, PromiseReturnType } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  return (
    // <div>
    //   <h1>Login</h1>

    //   <Form
    //     submitText="Login"
    //     schema={Login}
    //     initialValues={{email: "", password: ""}}
    //     onSubmit={async (values) => {
    //       try {
    //         const user = await loginMutation(values)
    //         props.onSuccess?.(user)
    //       } catch (error: any) {
    //         if (error instanceof AuthenticationError) {
    //           return {[FORM_ERROR]: "Sorry, those credentials are invalid"}
    //         } else {
    //           return {
    //             [FORM_ERROR]:
    //               "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
    //           }
    //         }
    //       }
    //     }}
    //   >
    //     <LabeledTextField name="email" label="Email" placeholder="Email" />
    //     <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
    //     <div>
    //       <Link href={Routes.ForgotPasswordPage()}>
    //         <a>Forgot your password?</a>
    //       </Link>
    //     </div>
    //   </Form>

    //   <div style={{marginTop: "1rem"}}>
    //     Or <Link href={Routes.SignupPage()}>Sign Up</Link>
    //   </div>
    // </div>

    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign In</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              try {
                await loginMutation({ email: e.target[0].value, password: e.target[1].value })
              } catch (error: any) {
                console.log("error")
              }
            }}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href={Routes.ForgotPasswordPage()}>
                  <a className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <Link href={Routes.SignupPage()}>
                  <a className="px-2 bg-white text-gray-500">Create an account</a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
