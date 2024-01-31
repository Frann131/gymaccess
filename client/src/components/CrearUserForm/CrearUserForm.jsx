const CrearUserForm = () => {
  return (
    <div>
      <form action="submit">
        <div class="form-group">
          <label for="nameinput">Nombre y Apellido</label>
          <input
            type="text"
            class="form-control"
            id="nameinput"
            placeholder="Nombre y apellido"
          />
        </div>
        <div class="form-group">
          <label for="emailinput">Correo electrónico</label>
          <input
            type="email"
            class="form-control"
            id="emailinput"
            placeholder="Correo electrónico"
          />
        </div>
        <div class="form-group">
          <label for="dniinput">DNI/Pasaporte</label>
          <input
            type="number"
            class="form-control"
            id="dniinput"
            placeholder="Ingresar número de documento"
          />
        </div>
        <div class="form-group">
          <label for="phoneinput">Teléfono</label>
          <input
            type="number"
            class="form-control"
            id="phoneinput"
            placeholder="Con codigo de área, sin 0 ni 15"
          />
        </div>
        <fieldset>
        <legend>Tipo de suscripción</legend>
        <div class="form-group flex-row" >
          <label for="mensualinput">Mensual</label>
          <input type="radio" class="form-check-input" value="" id="mensualinput" />
          <label for="fiftyinput">Quincena</label>
          <input type="radio" class="form-check-input" value="" id="fiftyinput" />
        </div>
        </fieldset>
      </form>
    </div>
  );
};
export default CrearUserForm;
