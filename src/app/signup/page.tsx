export default function Signup() {
    return(
        <div>
            <h1>Welcome!</h1>
            <h2>Sign up to Carbee</h2>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" required />
                </div>
                <button type="submit">Sign up</button>
                <span>
                    Already have an account? <a href="/login">Sign in</a>
                </span>
            </form>
        </div>
    )
}