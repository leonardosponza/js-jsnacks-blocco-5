//   Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

// var biciclette = [
//     {   nome : "tundem",
//         peso : 39,
//     },

//     {   nome : "harry",
//         peso : 30,
//     },

//     {
//         nome: 'stigatsby',
//         peso: 50,
//     }

// ];

// var pesomin = biciclette[0].peso;

// for(var i=1; i < biciclette.length; i++){
//     if(biciclette[i].peso < pesomin.peso){
//         pesomin = biciclette[i];        
//     }
// }

// console.log(pesomin);

// Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

//   var zucchine = [
//      {   nome : 'tundem',
//           peso : 39,
//           lunghezza:10,
//       },

//      {   nome : 'harry',
//           peso : 30,
//           lunghezza:16,
//       },

//       {
//           nome: 'lola',
//           peso: 50,
//           lunghezza:20,
//       },

//       {
//          nome: 'gianni',
//          peso: 10,
//          lunghezza:18,
//      },

//      {
//          nome: 'stigatsby',
//          peso: 8,
//          lunghezza:7,
//      },

//      {
//          nome: 'harry',
//          peso: 20,
//          lunghezza:10,
//      },

//      {
//          nome: 'manu',
//          peso: 23,
//          lunghezza:9,
//      },

//      {
//          nome: 'toni',
//          peso: 4,
//          lunghezza:3,
//      },

//      {
//          nome: 'verdana',
//          peso: 7,
//          lunghezza:11,
//      },

//      {
//          nome: 'molise',
//          peso: 21,
//          lunghezza:15,
//      }

//   ];

//   var pesotot = 0;

//   for(var i = 0; i<zucchine.length; i++){
//       console.log(zucchine[i].peso)
//       pesotot += zucchine[i].peso
//   }
//   console.log(pesotot);


// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine

var zucchine = [
    {   nome : 'tundem',
         peso : 39,
         lunghezza:10,
     },

    {   nome : 'harry',
         peso : 30,
         lunghezza:16,
     },

     {
         nome: 'lola',
         peso: 50,
         lunghezza:20,
     },

     {
        nome: 'gianni',
        peso: 10,
        lunghezza:18,
    },

    {
        nome: 'stigatsby',
        peso: 8,
        lunghezza:7,
    },

    {
        nome: 'harry',
        peso: 20,
        lunghezza:10,
    },

    {
        nome: 'manu',
        peso: 23,
        lunghezza:9,
    },

    {
        nome: 'toni',
        peso: 4,
        lunghezza:3,
    },

    {
        nome: 'verdana',
        peso: 7,
        lunghezza:11,
    },

    {
        nome: 'molise',
        peso: 21,
        lunghezza:17,
    }

 ];

 var zucchinemaggiori = [
   {   nome : 'harry',
   peso : 30,
   lunghezza:16,
   },

   {
       nome: 'lola',
       peso: 50,
       lunghezza:20,
   },

   {
       nome: 'gianni',
       peso: 10,
       lunghezza:18,
   },

   {
       nome: 'molise',
       peso: 21,
       lunghezza:17,
   }

 ]
 var zucchineminori = [
   {   nome : 'tundem',
         peso : 39,
         lunghezza:10,
   },

   {
       nome: 'stigatsby',
       peso: 8,
       lunghezza:7,
   },

   {
       nome: 'harry',
       peso: 20,
       lunghezza:10,
   },

   {
       nome: 'manu',
       peso: 23,
       lunghezza:9,
   },

   {
       nome: 'toni',
       peso: 4,
       lunghezza:3,
   },

   {
       nome: 'verdana',
       peso: 7,
       lunghezza:11,
   }
 ];

 var pesotot1 = 0;

  for(var i = 0; i<zucchineminori.length; i++){
      console.log(zucchineminori[i].peso)
      pesotot1 += zucchineminori[i].peso
  }
  console.log(pesotot1);

  var pesotot2 = 0;

  for(var i = 0; i<zucchinemaggiori.length; i++){
      console.log(zucchinemaggiori[i].peso)
      pesotot2 += zucchinemaggiori[i].peso
  }
  console.log(pesotot2);