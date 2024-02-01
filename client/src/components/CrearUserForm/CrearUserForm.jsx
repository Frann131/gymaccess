import s from "./CrearUserForm.module.css";
import { useState } from "react";
const CrearUserForm = () => {

const [plan, setPlan] = useState("30")

const handlePlan = (event) => {
  const valorRadio = event.target.value;
  setPlan(valorRadio);
};

  return (
    <div className={s.form}>
      <form action="submit">
        <div class="form-group m-3">
          <label for="nameinput">Nombre y Apellido</label>
          <input
            type="text"
            class="form-control "
            id="nameinput"
            placeholder="Nombre y apellido"
          />
        </div>
        <div class="form-group m-3">
          <label for="emailinput">Correo electrónico</label>
          <input
            type="email"
            class="form-control "
            id="emailinput"
            placeholder="Correo electrónico"
          />
        </div>
        <div class="form-group m-3">
          <label for="dniinput">DNI/Pasaporte</label>
          <input
            type="number"
            class="form-control "
            id="dniinput"
            placeholder="Ingresar número de documento"
          />
        </div>
        <div class="form-group m-3">
          <label for="phoneinput">Teléfono</label>
          <input
            type="number"
            class="form-control "
            id="phoneinput"
            placeholder="Con codigo de área, sin 0 ni 15"
          />
        </div>
        <fieldset>
          <legend>Tipo de suscripción</legend>
          <div class="form-group m-3">
            <span>
              <input
                type="radio"
                class="form-check-input"
                value="30"
                id="mensualinput"
                checked={plan==='30'}
                onChange={handlePlan}
              />
              <label for="mensualinput">Mensual</label>
            </span>
            <span>
              <input
                type="radio"
                class="form-check-input"
                value="15"
                id="fiftyinput"
                checked={plan==='15'}
                onChange={handlePlan}
              />
              <label for="fiftyinput">Quincena</label>
            </span>
            <span>
              <input
                type="radio"
                class="form-check-input"
                value="7"
                id="weekinput"
                checked={plan==='7'}
                onChange={handlePlan}
              />
              <label for="weekinput">Semana</label>
            </span>
            <span>
              <input
                type="radio"
                class="form-check-input"
                value="1"
                id="dayinput"
                checked={plan==='1'}
                onChange={handlePlan}
              />
              <label for="dayinput">Dia</label>
            </span>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
export default CrearUserForm;
