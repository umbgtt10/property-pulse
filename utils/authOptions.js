
import connectDB from '@/config/database'
import GoogleProvider from 'next-auth/providers/google'
import User from '@/models/User'

export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorization: {
          params: {
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code',
          },
        },
      }),
    ],
    callbacks: {
        // Invoked on seccessful signin
        async signIn({ profile }) {
            // 1. Connect to the DB
            await connectDB()
            // 2. Check if user exists
            const userExists = await User.findOne({ email: profile.email })
            // 3. If not, then add user to DB
            if (!userExists) {
                // Truncate user name if too long
                const username = profile.name.slice(0, 20)
                await User.create({
                    email: profile.email,
                    username,
                    image: profile.picture
                })
            }
            // 4. Return true to allow sign in
            return true
        },
        // Modifies the session object
        async session({ session }) {
            // 1. Get user from DB
            const user = await User.findOne({ email: session.user.email })
            // 2. Assign user id to session
            session.user.id = user._id.toString()
            // 3. Return session
            return session
        }
    }
}