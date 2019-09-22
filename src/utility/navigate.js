export default pathRoute => {
    // PATH-OVI SU RELATIVNI NA DIST
    // POSTO ROUTING NIJE NESTO STO ZNAM DA MOZE I STO
    // MOZDA SE MOZE DEFINISATI PLUGIN ILI NESTO SLICNO



    window.location.assign(pathRoute)

    // debugger;

    console.log(pathRoute);
    console.log(window.location);
    console.log(window.location.origin);

}