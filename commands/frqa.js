module.exports = {
    name: 'frq',
    description: 'Frecuencia (Frqa) de un sonido y sus armónicos naturales.\r\nArgumentos: ciclo(0-8), grado(0-11). \r\n*Por ejemplo* `$frq 4 9` *resultará en la frecuencia del noveno grado del índice 4. _(La central)_*',
  args: true,

execute(message, args) {
        if (args[1] <= 8) {

    } else if (args[0] <= 12) {

    }

    function round(value, decimals) {
      return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }

      var frqu = ((args[1]*1)+1)
      var frqr = round(440*((Math.E)**((((args[0])- 4)+((frqu)-10)/12)*Math.log(2))),3)
      var arm = [round(frqr*1,3), round(frqr*2,3), round(frqr*3,3), round(frqr*4,3), round(frqr*5,3), round(frqr*6,3), round(frqr*7,3), round(frqr*8,3), round(frqr*9,3), round(frqr*10,3), round(frqr*11,3), round(frqr*12,3), round(frqr*13,3)]
      message.channel.send(`Ciclo: ${args[0]}, Grado: ${args[1]}, Resultado: ${frqr} Hz\r\nArmónicos Naturales: ${arm[1]}, ${arm[2]}, ${arm[3]}, ${arm[4]}, ${arm[5]}, ${arm[6]}, ${arm[7]}, ${arm[8]}, ${arm[9]}, ${arm[10]}, ${arm[11]}, ${arm[12]}`);
      },

};
