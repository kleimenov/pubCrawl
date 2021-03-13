import React from "react";

export const AuthPage = () => {
  return (
    <div>
      <div>
        <h1 className="text-secondary">Pub Crawl (Auth page)</h1>
        <div className="flex column">
          <span className="h4 text-secondary">Authentication</span>
          <div>
            <input 
              id="email"
              type="text"
              name="email"
              placeholder="Enter your email"
              //value={form.email}
              //onChange={changeHandler}´´
            />
            <label className="ml-2" htmlFor="email">
              Email
            </label>
          </div>
          <div>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              //value={form.password}
              //onChange={changeHandler}
            />
            <label className="ml-2" htmlFor="first_name">
              Password
            </label>
          </div>
        </div>
        <div>
          <button
            className="btn btn-success text-white"
            //onClick={loginHandler}
            //disabled={loading}
          >
            Login
          </button>
          <button
            className="btn btn-warning text-white ml-1"
            //onClick={registrationHandler}
            //disabled={loading}
          >
            Registration
          </button>
        </div>
      </div>
    </div>
  );
};
