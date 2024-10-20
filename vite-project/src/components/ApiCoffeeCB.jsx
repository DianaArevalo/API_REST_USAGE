import axios from 'axios';
import { useEffect, useState } from 'react';

const ApicolorCB = () => {
   const [colorsCss, setColorsCss] = useState([]); 

   useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.sampleapis.com/csscolornames/colors');
            setColorsCss(response.data);
            console.log(response.data); // Ahora muestra la data correctamente.
        } catch (error) {
            console.log("Error to obtain the data", error);
        }
    };

    fetchData();
   }, []);

   return (
    <div className="container-fluid p-0">
      <div className="text-center mb-4">
        <h1 className="text-white">Colors List</h1>
      </div>
      <div className="carousel-container">
        <div id="colorCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Mapeamos colorsCss para generar un item del carrusel por cada color */}
            {colorsCss.map((color, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                {/* No hay una imagen en la data, pero puedes usar color.name para el título */}
                <div className="d-block w-100" style={{ height: '300px', backgroundColor: color.hex }}></div>
                <div className="carousel-caption d-none d-md-block">
                  <h5>{color.name}</h5>
                  <p>{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Botón para navegar al ítem anterior del carrusel */}
          <button className="carousel-control-prev" type="button" data-bs-target="#colorCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          {/* Botón para navegar al siguiente ítem del carrusel */}
          <button className="carousel-control-next" type="button" data-bs-target="#colorCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApicolorCB;
