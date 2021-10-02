import { Bar } from 'react-chartjs-2';

const Receiver = ({ payload }) => {

function filter(data)
{
    let mes = data.message
    console.log(mes)
    const reg = /\d+\.*\d*/g;
    let result = mes.match(reg);
    return result
}

var datavalue = payload.message ? payload : {message:'0,0,0,0,0,0,0,0,0,0,0,0'}
const result = filter(datavalue)

let L1 =parseFloat(result[1])
let L2 =parseFloat(result[5])
let L3 =parseFloat(result[10])
let FM_1 =parseFloat(result[3])
let FM_2 =parseFloat(result[7])
let FM_3 =parseFloat(result[9])

// ****************************** Code For filtering data from Object ****************************************
// const value={
//     "L1":"0",
//     "FM1":"0",
//     "L2":"0",
//     "FM2":"0",
//     "L3":"0",
//     "FM3":"0",
// }

// const FM1_key = "FM1";
// const FM2_key = "FM2";
// const FM3_key = "FM3";

// const { [FM1_key]:FM_1 } = value;
// const { [FM2_key]:FM_2 } = value;
// const { [FM3_key]:FM_3 } = value;

// const L1_key = "L1";
// const L2_key = "L2";
// const L3_key = "L3";

// const { [L1_key]:L_1 } = value;
// const { [L2_key]:L_2 } = value;
// const { [L3_key]:L_3 } = value;

// const L1 = parseInt(L_1)
// const L2 = parseInt(L_2)
// const L3 = parseInt(L_3)

// ****************************** Code For filtering data from Object End ****************************************

const waterlvl = [L1,L2,L3]; 
const data = {
  labels: ['Tank 1', 'Tank 2', 'Tank 3'],
  datasets: [
    {
      label: 'Volume of Water',
      data: waterlvl,
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 3,
    },
  ],
};

  return (
    <div>
        <h1 class="text-4xl font-semibold text-gray-800 my-2  ">
            Water Display 
        </h1>
        {/************************ Dash Content *************************/}
        <div class=" bg-gray-100 h-screen pb-24 px-4 md:px-6">                   
            <div class=" my-2 w-full ">        
                                <div class=" flex flex-row gap-2 h-full">

                                    <div class="shadow-lg px-4 py-6 w-3/4 mt-2 bg-white relative rounded-xl">
                                            <p class="text-sm w-max text-gray-700  font-semibold border-b border-gray-200">
                                                Water Volume Value
                                            </p>
                                        <div class="w-full flex justify-center g">
                                                <Bar data={data}  />
                                        </div>
                                    </div>

                                    <div class=" flex flex-col gap-2 w-1/4 px-2 py-2 w-1/4 mt-2  items-center relative ">        
                                        <div class="shadow-lg rounded-2xl w-full p-4 bg-white">
                                            <div class="flex items-center">
                                                <h2 class="text-lg font-bold text-gray-700  ml-2">
                                                    Flow Meter 
                                                </h2>
                                            </div>
                                            <div class="flex flex-col justify-start">
                                                <p class="text-md  text-gray-700 ml-2">
                                                    Tank 1 
                                                </p>
                                                <p class="text-gray-800 text-4xl text-center font-bold my-2">
                                                    {/* FM 1 value */}
                                                    {FM_1}
                                                </p>
                                            </div>
                                        </div>

                                        <div class="shadow-lg rounded-2xl w-full p-4 bg-white">
                                            <div class="flex items-center">
                                                <h2 class="text-lg font-bold text-gray-700 ml-2">
                                                    Flow Meter 
                                                </h2>
                                            </div>
                                            <div class="flex flex-col justify-start">
                                                <p class="text-md  text-gray-700  ml-2">
                                                    Tank 2 
                                                </p>
                                                <p class="text-gray-800 text-4xl text-center  font-bold my-2">
                                                    {/* FM 2 value */}
                                                    {FM_2}
                                                </p>
                                            </div>
                                        </div>

                                        <div class="shadow-lg rounded-2xl w-full p-4 bg-white ">
                                            <div class="flex items-center">
                                                <h2 class="text-lg font-bold text-gray-700  ml-2">
                                                    Flow Meter 
                                                </h2>
                                            </div>
                                            <div class="flex flex-col justify-start">
                                                <p class="text-md  text-gray-700 ml-2">
                                                    Tank 3
                                                </p>
                                                <p class="text-gray-800 text-4xl text-center  font-bold my-2">
                                                    {/* FM 3 value */}
                                                    {FM_3}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
            </div>                   
        </div>
            {/*********************** Dash content end *************************/}
    </div>
  );
}

export default Receiver;