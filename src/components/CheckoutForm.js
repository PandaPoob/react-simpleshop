import { useRef } from "react";

export default function CheckoutForm() {
  const formEl = useRef(null);
  function submitted(e) {
    e.preventDefault();
    //console.log(formEl.current.elements.fullname.value);
    //console.log(formEl.current.elements.address.value);
    fetch("databaseendpoint/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: formEl.current.elements.fullname.value,
        address: formEl.current.elements.address.value,
      })
        .then((res) => res.json())
        .then((data) => {}),
    });
  }

  return (
    <div>
      <form ref={formEl} onSubmit={submitted}>
        <label htmlFor="fullname">Full name</label>
        <input required type="text" name="fullname" id="fullname"></input>
        <label htmlFor="address">Address</label>
        <input required type="text" name="address" id="address"></input>
        <button>Pay</button>
      </form>
    </div>
  );
}
