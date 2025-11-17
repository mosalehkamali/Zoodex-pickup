export default defineEventHandler(async (event) => {
    const body = await readBody(event)
  
    const { email, password } = body
  
    if (!email || !password) {
      return {
        success: false,
        message: "Email and password are required."
      }
    }
  
    const fakeToken = Math.random().toString(36).slice(2) + Date.now()
  
    setCookie(event, "token", fakeToken, {
      httpOnly: false,        
      sameSite: "lax",
      secure: false,          
      path: "/",
      maxAge: 60 * 60 * 24 * 7 
    })
  
    return {
      success: true,
      user: {
        id: 1,
        name: "Demo User",
        email
      }
    }
  })
  