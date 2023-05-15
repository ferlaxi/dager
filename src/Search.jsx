import octocat from './assets/octocat.png'
import location from './assets/icon-location.svg'
import twitter from './assets/icon-twitter.svg'
import website from './assets/icon-website.svg'
import company from './assets/icon-company.svg'
import { useEffect, useState } from 'react'
import search from './assets/icon-search.svg'
import moment from 'moment/moment'
import 'moment/locale/es'

const Search = () => {
    const [get, setGet] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [error, setError] = useState("");
    const [dark, setDark] = useState(0)

    const datos = e => {
        e.preventDefault();
        fetch(`https://api.github.com/users/${busqueda}`)
        .then((response) => {
            if(response.status === 200){
                setError("")
                return response.json();
            } else if (response.status === 404){
                setError("Error");
                return response.json();
            }
        })
        .then(data => setGet(data))
    }

    const handleChange = e => {
        setBusqueda(e.target.value);
    }

    // DarkMode
    const darkmode = () => {
        dark == 0 ? (
            setDark(1)
        ) : (
            setDark(0)
        )
    }

    //DarkMode Sistema
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDark(1)
        } else {
            setDark(0)
        }
    }, [])
    
    return(

        <div className="md:w-[800px] md:h-[600px] xl:mb-0 md:mb-56 w-[390px]">

            {
                dark == 1 ? (
                    document.body.classList.add('dark', 'bg-l-dev-dark')
                ) : (
                    document.body.classList.remove('dark', 'bg-l-dev-dark')
                )
            }

            {/* head */}
            <div className='flex justify-between mx-10'>
                <div className='font-bold text-[26px] text-l-dev-semidark dark:text-l-dev-semiwhite'>devfinder</div>
                <a onClick={darkmode} className='flex items-center gap-x-2 cursor-pointer group' href='#'>
                    
                    {
                        dark == 1 ? (
                            <div className='text-l-dev-gray font-bold tracking-widest transition-all duration-200 group-hover:text-l-dev-gray dark:text-l-dev-semiwhite'>LIGHT</div>
                        ) : (
                            <div className='text-l-dev-gray font-bold tracking-widest transition-all duration-200 group-hover:text-l-dev-semidark dark:text-l-dev-semiwhite'>DARK</div>
                        )
                    }

                    {
                        dark == 1 ? (
                            <svg className='transition-all duration-200 fill-current2 group-hover:fill-l-dev-gray' width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z"/></svg>
                        ) : (
                            <svg className='transition-all duration-200 fill-current1 group-hover:fill-l-dev-semidark dark:fill-current2' width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z" /></svg>
                        )
                    }

                    
                </a>
            </div>





            {/* search-bar */}

            <div className='flex items-center gap-x-2 md:w-[720px] mt-5 h-[65px] bg-l-dev-white mx-10 px-7 rounded-2xl shadow-lg dark:bg-l-dev-dark1 w-[320px]'>
                <img src={search} alt="icon-search" />
                <form className='flex' onSubmit={datos} action="#"> 
                    <input className='relative md:w-[540px] w-[150px] border-none focus:border-transparent focus:ring-0 cursor-pointer dark:bg-l-dev-dark1 dark:placeholder-white dark:text-l-dev-semiwhite md:text-base text-sm' type="text" placeholder='Buscar usuario de Github...' onChange={handleChange} />

                    <button type='submit' className='bg-l-dev-blue text-l-dev-white font-bold px-5 py-3 rounded-lg hover:bg-l-dev-hover transition-all duration-300'>Buscar</button>

                    {
                        error == "Error" ? (
                            <div className="absolute md:ml-[410px] md:mt-3 text-sm text-l-dev-error font-bold ml-5 mt-[33px]">No Resultados</div>
                        ) : (
                            <div></div>
                        )
                    }
                </form>
            </div>





            {/* main-section */}

            <div className="flex flex-wrap md:w-[720px] w-[320px] mt-5 md:h-[420px] h-[530px] bg-l-dev-white mx-10 rounded-2xl shadow-lg dark:bg-l-dev-dark1">
                <div>
                    {
                        get.avatar_url ? (
                            <img className="border rounded-full md:w-28 md:h-28 ml-10 mt-10 h-20 w-20" src={get.avatar_url} alt="profile_pic" />
                        ) : (
                            <img className="border rounded-full md:w-28 md:h-28 ml-10 mt-10 h-20 w-20" src={octocat} alt="profile_pic" />
                        )
                    }
                </div>

            <div className="ml-7">
                <div className="flex items-center justify-between md:mt-9 md:w-[500px] w-[220px] md:flex-row flex-col xl:gap-y-0 gap-y-6 md:ml-0 ml-20 -mt-[100px]">

                    {
                        get.name ? (
                            <div className="font-bold md:text-[26px] text-l-dev-semidark dark:text-l-dev-semiwhite text-[20px]">{get.name}</div>
                        ) : (
                            <div className="font-bold md:text-[26px] text-l-dev-semidark dark:text-l-dev-semiwhite text-[20px]">Usuario</div>
                        )
                    }


                    {
                        get.created_at ? (
                            <div className='text-l-dev-gray md:text-[16px] dark:text-l-dev-semiwhite text-[12px]'>Se unió {moment(get.created_at).format('MMMM Do YYYY')}</div>
                        ) : (
                            <div className='text-l-dev-gray md:text-[16px] md:ml-0 dark:text-l-dev-semiwhite text-[12px] ml-8'>Sin Fecha</div>
                        )
                    }

                </div>

                {
                    get.login ? (
                        <div className='text-l-dev-blue xl:mt-3 md:ml-0 md:-mt-0 ml-[110px] -mt-[40px]'>@{get.login}</div>
                    ) : (
                        <div className='text-l-dev-blue xl:mt-3 md:ml-0 md:-mt-0 ml-[110px] -mt-[25px]'>@????</div>
                    )
                }

                {
                    get.bio ? (
                        <div className='text-l-dev-gray md:mt-7 dark:text-l-dev-semiwhite mt-16'>{get.bio}</div>
                    ) : (
                        <div className='text-l-dev-gray mt-7 dark:text-l-dev-semiwhite'>No biografía</div>
                    )
                }



                <div className='flex justify-between items-center md:px-10 px-5 md:w-[500px] w-[270px] md:h-[90px] h-[110px] bg-l-dev-semiwhite rounded-xl mt-7 dark:bg-l-dev-dark'>
                    <div>
                        <div className='text-l-dev-gray dark:text-l-dev-semiwhite md:text-base text-[12px]'>Repos</div>
                        {
                            get.public_repos ? (
                                <div className='font-bold text-[22px] text-l-dev-semidark dark:text-l-dev-semiwhite'>{get.public_repos}</div>
                            ) : (
                                <div className='font-bold text-[22px] text-l-dev-semidark dark:text-l-dev-semiwhite'>?</div>
                            )
                        }


                    </div>
                    <div>
                        <div className='text-l-dev-gray dark:text-l-dev-semiwhite md:text-base text-[12px]'>Seguidores</div>
                        {
                            get.followers ? (
                                <div className='font-bold text-[22px] text-l-dev-semidark dark:text-l-dev-semiwhite'>{get.followers}</div>
                            ) : (
                                <div className='font-bold text-[22px] text-l-dev-semidark dark:text-l-dev-semiwhite'>?</div>
                            )
                        }

                    </div>
                    <div>
                        <div className='text-l-dev-gray dark:text-l-dev-semiwhite md:text-base text-[12px]'>Siguiendo</div>
                        {
                            get.following ? (
                                <div className='font-bold text-[22px] text-l-dev-semidark dark:text-l-dev-semiwhite'>{get.following}</div>
                            ) : (
                                <div className='font-bold text-[22px] text-l-dev-semidark dark:text-l-dev-semiwhite'>?</div>
                            )
                        }
                    </div>
                </div>
            </div>



            <div className='md:flex flex-wrap gap-x-14 md:ml-48 mb-7 flex-col ml-7'>
                <div className='flex md:flex-row flex-col gap-x-28 md:gap-y-0 gap-y-3'>
                    <div className='flex items-center gap-x-4'>
                        <svg className='fill-current3 dark:fill-white' height="20" width="14" xmlns="http://www.w3.org/2000/svg "><path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z"/></svg>

                        {
                            get.location ? (
                                <div className='text-l-dev-gray dark:text-l-dev-semiwhite'>{get.location}</div>
                            ) : (
                                <div className='text-l-dev-gray dark:text-l-dev-semiwhite'>No Disponible</div>
                            )
                        }

                    </div>
                    <div className='flex items-center gap-x-4'>
                        <svg className='fill-current3 dark:fill-white' height="18" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z"/></svg>  

                        {
                            get.twitter_username ? (
                                <div className='text-l-dev-gray dark:text-l-dev-semiwhite'>{get.twitter_username}</div>
                            ) : (
                                <div className='text-l-dev-gray dark:text-l-dev-semiwhite'>No Disponible</div>
                            )
                        }
                    </div>
                </div>

                <div className='flex md:flex-row flex-col gap-x-12 md:gap-y-0 gap-y-3 md:mt-3 mt-3'>
                    <div className='flex items-center gap-x-4 flex-row'>
                        <svg className='fill-current3 dark:fill-white' height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z"/><path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z"/></svg>

                        {
                            get.blog ? (
                                <a className='text-l-dev-gray hover:underline dark:text-l-dev-semiwhite' href="#">{get.blog}</a>
                            ) : (
                                <div className='text-l-dev-gray hover:underline dark:text-l-dev-semiwhite'>No Disponible</div>
                            )
                        }
                    </div>
                    <div className='flex items-center gap-x-4 md:ml-20'>
                        <svg className='fill-current3 dark:fill-white' height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z"/></svg>

                        {
                            get.company ? (
                                <div className='text-l-dev-gray dark:text-l-dev-semiwhite'>{get.company}</div>
                            ) : (
                                <div className='text-l-dev-gray dark:text-l-dev-semiwhite'>No Disponible</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Search