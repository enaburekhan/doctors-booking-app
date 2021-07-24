const signUp = () => (
  <>
    <h2 className="create">Sign up to Book an appointment</h2>
    <form>
      <div className="form-group create">
        <label htmlFor="username" className="control-label">
          Username
          <input
            type="text"
            name="username"
            className="form-control"
            required
            minLength="3"
            maxLength="15"
          />
        </label>
      </div>
      <div className="form-group create">
        <label htmlFor="password" className="control-label">
          Password
          <input
            type="text"
            name="password"
            className="form-control"
            required
            minLength="5"
          />
        </label>
      </div>
      <div className="form-group create">
        <label htmlFor="age" className="control-label">
          Age
          <input
            type="text"
            name="age"
            className="form-control"
            required
            minLength="5"
          />
        </label>
      </div>

      <div className="form-group create">
        <button type="button" className="btn btn-primary btn-lg">
          Sign up
        </button>
      </div>
    </form>
  </>
);

export default signUp;
