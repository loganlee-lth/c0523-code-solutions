function RegistrationFormUncontrolled() {

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username<input autoComplete="hidden" name="username"></input>
      </label>
      <label>
        Password<input type="password" name="password"></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationFormUncontrolled;
