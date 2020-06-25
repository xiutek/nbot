module.exports = {
    name: 'frqa',
    description: '(¡Comando experimental, los resultados podrían ser incorrectos!) Frecuencia *avanzada* de un sonido y sus armónicos naturales.\r\nArgumentos: temperamento(en Hz; usualmente 440), geometria(divisiones del ciclo; usualmente 12), ciclo(0-8), grado. \r\n*Por ejemplo* `$frq 440 16 4 9` *resultará en la frecuencia del noveno grado del índice 4 de una octava dividida en 16 semitonos y afinada en La 440.*',
  args: true,

execute(message, args) {
        if (args[0] <= '8') {

    } else if (args[1] <= '12') {

    } else if (args[2] <= '12') {

    } else if (args[3] <= '12') {

    }

    function round(value, decimals) {
      return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }

      var frqu = ((args[3]*1)+1)
      var raiz = 4
      var frqr = round((args[0])*((Math.E)**((((args[2])- raiz)+((frqu)-10)/(args[1]))*Math.log(2))),3)
      var arm = [round(frqr*1,3), round(frqr*2,3), round(frqr*3,3), round(frqr*4,3), round(frqr*5,3), round(frqr*6,3), round(frqr*7,3), round(frqr*8,3), round(frqr*9,3), round(frqr*10,3), round(frqr*11,3), round(frqr*12,3), round(frqr*13,3)]
      message.channel.send(`Temperamento: ${args[0]}, Geometría: ${args[1]}, Ciclo: ${args[2]}, Grado: ${args[3]}, Resultado: ${frqr} Hz\r\nArmónicos Naturales: ${arm[1]}, ${arm[2]}, ${arm[3]}, ${arm[4]}, ${arm[5]}, ${arm[6]}, ${arm[7]}, ${arm[8]}, ${arm[9]}, ${arm[10]}, ${arm[11]}, ${arm[12]}`);
      },

};
