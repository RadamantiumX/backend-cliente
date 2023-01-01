import React from "react";
import { useState } from "react";
import "./proyecto.css";




function proyecto() {
    const[start, setStart] = useState(false);
    const[btnDisplay, setBtnDisplay]= useState(true);

  return (
    <>
     <button className="btn btn-success">Empezar Test</button>
      <div className="blackg">
        <div style={{ marginTop: "6rem" }} class="container">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Más Agua Limpia más Vida</h1>
          </div>
            {/* Nombre */}
          <div class="row">
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        Nombre
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-user fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Logitud */}
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        style={{ color: "#930ee4" }}
                        class="text-xs font-weight-bold  text-uppercase mb-1"
                      >
                        Respuesta Pendiente
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        Latitud
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-question fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              {/* Longitud */}
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        style={{ color: "#930ee4" }}
                        class="text-xs font-weight-bold  text-uppercase mb-1"
                      >
                        Respuesta Pendiente
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        Longitud
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-question fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-xl-3 col-md-6 mb-4">
            <div class="main-button buttom-proyecto d-flex align-items-center">
                              <a href=""><i style={{marginRight:"0.5rem"}} class="fas fa-location-dot fa-1x text-gray-300"></i>Ver Mapa</a>
                            </div>
            </div>



          </div>
          {/* Columna Izquierda */}
          <div class="row">
            <div class="col-xl-8 col-lg-7">
              <div class="card card-glass shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 style={{ color: "#930ee4" }} class="m-0 font-weight-bold">
                    Lorem Ipsum
                  </h6>
                  <div class="dropdown no-arrow"></div>
                </div>

                <div class="card-body">
                  <div class="chart-area">
                  <div  class="row justify-content-center d-flex align-items-center ">
                          <div class="col-5 col-md-3">
                            <a><i style={{marginTop:"3rem"}} class="fas fa-cloud-arrow-up fa-5x text-gray-300"></i></a>
                          </div>
                          <div class="col-5 col-md-3">

                          <a><i style={{marginTop:"3rem"}} class="fas  fa-camera fa-5x text-gray-300 "></i></a>

                          </div>
                        </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha */}
            <div class="col-xl-4 col-lg-5">
              <div class="card card-glass shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6
                    style={{ color: "#930ee4" }}
                    class="m-0 font-weight-bold "
                  >
                    lorem ipsum
                  </h6>
                  <div class="dropdown no-arrow"></div>
                </div>

                <div class="card-body">
                  <div class="mt-4 text-center small">
                    {/* los gráficos van acá */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default proyecto;
