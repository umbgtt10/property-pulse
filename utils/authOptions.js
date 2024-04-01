import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    provider:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization:{
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                }
            }
        })
    ],
    callbacks: {
        // Invoked on seccessful signin
        async signIn({ profile }) {
            // 1. Connect to the DB
            // 2. Check if user exists
            // 3. If not, then add user to DB
            // 4. Return true to allow sign in
        },
        // Modifies the session object
        async session({ session }) {
            // 1. Get user from DB
            // 2. Assign user id to session
            // 3. Return session
        }
    }
}