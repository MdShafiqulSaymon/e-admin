import {faChartLine}from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardLineChart from './Chart/CardLineChart';
import CardBarChart from './Chart/CardBarChart';
export default function Dashboard(){
    return(
        <div className="main-container flex flex-col w-full p-6  text-2xl gap-10">
            <div className="dashboard_title flex flex-col gap-4">
                <span className="text-xl text-blue-500">Dashboard</span>
                <button className="w-fit border-2 bg-teal-300 p-3 rounded-xl">Dashboard</button>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:justify-around sm:gap-8 mt-10">
                <div className='single-item bg-white p-3 md:w-fit grow rounded-2xl mb-0'>
                    <div className="flex flex-row">
                        <span className='text-xl font-bold text-blue-500'>Order | </span>
                        <span className='text-xl text-gray-500'>This Month</span>
                    </div>
                    <div className='flex flex-row gap-4 mt-4 items-center'>
                        <div className="colour-box w-10 h-16 bg-blue-300 rounded-3xl"></div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-5xl font-bold'>3</span>
                            <div className='flex gap-4'>
                                <span className='text-2xl text-red-600'>-67%</span>
                                <FontAwesomeIcon icon={faChartLine} className="w-5 h-5 text-red-600" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='single-item bg-white p-3 md:w-fit grow rounded-2xl mb-0'>
                    <div className="flex flex-row">
                        <span className='text-xl font-bold text-blue-500'>Revenue | </span>
                        <span className='text-xl text-gray-500'>This Month</span>
                    </div>
                    <div className='flex flex-row gap-4 mt-4 items-center'>
                        <div className="colour-box w-10 h-16 bg-green-300 rounded-3xl"></div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-5xl font-bold'>$ 17,100</span>
                            <div className='flex gap-4'>
                                <span className='text-2xl text-red-600'>-99%</span>
                                <FontAwesomeIcon icon={faChartLine} className="w-5 h-5 text-red-600" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='single-item bg-white p-3 md:w-fit grow rounded-2xl mb-0'>
                    <div className="flex flex-row">
                        <span className='text-xl font-bold text-blue-500'>Customers | </span>
                        <span className='text-xl text-gray-500'>This Month</span>
                    </div>
                    <div className='flex flex-row gap-4 mt-4 items-center'>
                        <div className="colour-box w-10 h-16 bg-yellow-300 rounded-3xl"></div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-5xl font-bold'>35</span>
                            <div className='flex gap-4'>
                                <span className='text-2xl text-red-600'>12%</span>
                                <FontAwesomeIcon icon={faChartLine} className="w-5 h-5 text-green-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-around md:gap-8'>
                <CardLineChart/>
                <CardBarChart/>
            </div>
        </div>
    )
}