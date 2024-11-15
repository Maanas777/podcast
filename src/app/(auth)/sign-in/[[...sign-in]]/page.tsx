import { SignIn } from '@clerk/nextjs'

const Page = () => {
    console.log("signin page called")
  return (
    <div className="flex-center glassmorphism-auth h-screen w-full">
      <SignIn />
    </div>
  )
}

export default Page