export default function Login() {
    return (
        <div>
            <h1>Welcome Back!</h1>
            <h2>Sign in to Carbee</h2>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>
                <button type="submit">Sign in</button>
                <span>
                    Don&apos;t have an account? <a href="/signup">Sign up</a>
                </span>
            </form>
        </div>
    )
}