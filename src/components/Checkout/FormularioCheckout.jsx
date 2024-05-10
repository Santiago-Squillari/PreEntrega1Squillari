const FormularioCheckout = ({ dataForm, handleChangeInput, handleSubmit }) => {
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={dataForm.name}
          onChange={handleChangeInput}
        />
  
        <label htmlFor="phone">Telefono:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={dataForm.phone}
          onChange={handleChangeInput}
        />
  
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={dataForm.email}
          onChange={handleChangeInput}
        />

        <label htmlFor="emailVerification">Verifica tu email:</label>
        <input
          type="email"
          id="emailVerification"
          name="emailVerification"
          value={dataForm.emailVerification}
          onChange={handleChangeInput}
        />
    
        <button type="submit" className="submit">Enviar Orden</button>
      </form>
    );
  };
  export default FormularioCheckout;