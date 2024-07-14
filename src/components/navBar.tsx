import React from "react";

export default function NavBar() {

  return (
    <div className="navbar navbar-glass">
	<div className="navbar-start">
		<a className="navbar-item">Pterofy</a>
	</div>
	<div className="navbar-end">
		<a className="bg-blue-300 navbar-item" href="/dashboard">Dashboard</a>
	</div>
</div>
  );
}
