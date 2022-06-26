import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Visonit Amplificación",
      foodDetails:"Visonit Amplificación es una empresa que provee de servicios tanto de música como de iluminación para el gran día del matrimonio. ",
      foodPrice:350000,
      foodImg:'../../../assets/img/matrimonio1.jpg'
    },
    {
      id:2,
      foodName:"Empresas Euphoria",
      foodDetails:"Empresas Euphoria Servicios de Amplificación e Iluminación y Producción de Eventos es una empresa con más de 23 años de experiencia brindando lo mejor en música e iluminación para matrimonios y otros eventos sociales.",
      foodPrice:450000,
      foodImg:'../../../assets/img/matrimonio2.jpg'
    },
    {
      id:3,
      foodName:"De Eleganza",
      foodDetails:"La dedicación de De Eleganza en su matrimonio buscará entregarles un trabajo que responda a todas sus peticiones. Su amplia experiencia y personal especializado son los dos pilares que les permitirán planificar su boda de ensueño.",
      foodPrice:300000,
      foodImg:'../../../assets/img/matrimonio3.jpg'
    },
    {
      id:4,
      foodName:"DSG Amplificación & Eventos",
      foodDetails:"DSG Amplificación & Eventos es una compañía especializada en la producción de matrimonvios y grandes eventos.",
      foodPrice:150000,
      foodImg:'../../../assets/img/matrimonio4.jpg'
    },
    {
      id:5,
      foodName:"S&S Audio",
      foodDetails:"S&S Audio es una empresa especialista en audio e iluminación para eventos sociales. Se caracteriza por brindar soluciones innovadoras, vanguardistas y entregar la mayor dedicación en cada uno de los servicios en los que participa.",
      foodPrice:500000,
      foodImg:'../../../assets/img/matrimonio5.jpg'
    },
    {
      id:6,
      foodName:"Barman Eventos y PartyBar",
      foodDetails:"Esta empresa les ofrece sus servicios de barra móvil en toda la región, poniendo el toque preciso de animación que su evento necesita.",
      foodPrice:80000,
      foodImg:'../../../assets/img/matrimonio6.jpg'
    }
  ]

}
