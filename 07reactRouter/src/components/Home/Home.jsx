import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhAREhIVFRUWFxUYFRUTFxYWFxkVGBUWFxkVExUYHSggGBolGxUVITIhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGRAQGy0lHSUtKysrLi0vKy8tKzcrKy0tLS03Mi0yMi0tKy0tLS0tLy0tLS0tLS0tLS0rLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQCBQYBB//EAD4QAAIBAgQDBAcGBQIHAAAAAAABAgMRBBIhMQVBUWFxgZEGEyIyobHBI0JSctHwBxRiguEVJDRTg5Kis/H/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIEAwX/xAAqEQEAAgIBAwIFBAMAAAAAAAAAAQIDESEEEkExURMUgZGxBSJhocHR8P/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1mK4lKnNxlBNcne10Z0OLU5b3j37eaLGNw8ZxtLwfNPsOdrYdxbWjt0f03RXlabVl1MZJ6rVdh6cvhMXKm9Hpzi9v8M32HxSnFSX/x9GNNVvErM5JJtuyW7eyXac5xL0pjG8aMcz/FL3fBbv4Gr9IuMOtJwi7U4vl95rm+zp5lHh2FjOcIybeZpZYb9rctoq2ul2aivu8L5pme2rqvRurXq5q1WTcXpCNklvrJJeXmbwxpQUUopWSSSS5JcjGrSUst76O+ja87bozLorGo0kABGgAAARUqTTk2737+r/X4EpImZjkAAUAAAAAAAAAAAAAAAACrjMfTp+/OMX2vXwW5zPGuI4u7i4SpR/pTd++ovpY51vrubirmv1GuIh2s/SLDr77fdGX1RTxnEcPU9qM7S6STV/G1rnNOjK12rLk3pfuvv4EZe2HlOa0+roU7mUsVKFOrl5xa7u3wVzjOK8YnRSp03aT1cui2sltfTfkarD8cxEHf1spLnGbck10s9vAvYnxHT06bk7RTb6JXZv8Ag0FQvNpSqNWXSK71u+45fCcZoWSnUcU0m4pSfhKysdLQrRnFShJSi9mtULJjjyv1OJVX963ckv8AJGsbU/HLzICzhaOd2VNvti7ebaaMPfcylp8VqrdqXev0NjgeJqo1FxafZqvHoKfCKa3vLvf6WPKGJdk4UrQ1vsn2W1t5kekRaPWWyBFhq2eKla1+T5a2PJvUj02ylUPPWGAKbZ+sHrDAATxdz0hjOxMRQAAAAAAAAAAAABHVexBUpKV7rXqt12p8mTVeRgVJc5i/RlyblGs23/zLt+Mlv5GoqcKkm1ni7c43fldI6biuM3px/uf0NWaiZct6U3w4n0l4ZO8akYytZRd1re7aaS8epoaNGUnaKvbd8kusntFd51Xp3mtQ/Ded/wA1o2+Gb4nM08bNNXk5rVOMpSaaas1vpp5HtX0c9o1KPENX9nVJJJ9bJK9u13fidD6G8TnS9bBaxaUrPVKW17Nc18kV8B6OOvBVac8sW2kqi1000a0kr6X022NvheFKjTTjdu7jUb3U1drTlFx27pEmY9CImOW9wnHkn9pRg+2Ks/J3T+B1HDsfTqK9OV1zWzXej54S4evKnJSg3GS5/R9V2HnNXrTNNfV9GxtPNCStfTRJ213RVo46MI5ZezKOjT/fyI+B8WVePSa96P1XYzZOlF30Wu+i1ttfqY9HXE93MK3DqTWduOVylfV7rlpy3LTimZAjURpj6tGHqyUBUTpkdOSlopJ/p1XVE1aGaMo9U15oiUZNxbSVrve93a2mm2vwMWtaJ1CxEJFTJADaAAAAAAAAAAAAADCqipi62SDlz5d/IutGj43U1jDpq/HRfvtLDF51G2sbJJU2ssbavW3fsvLXxLuB4c3aU1Zco8339EbSNKKbaSu93zLt5RSZaHHcHpyozVeOa/uxvtLlJNfeRpMD/D6jJZ5Valne0fZXdmlbbusdLxqrrGPRXfe/38TZ0IZYxj0S+Re6YXsrM+jnJ0YwbhFKMY+yktkloi3w6lCaqU5xTzLfnp29m6JeJYa083KSb8Urv5Ffhr+0h4/JkZ1qzVcT4DUpXcU5w6rdfmX1XwKM6WaHrFyajPsf3Zdz270+qPoRFLDQbk3CN5K0nZXa6PqXuScEeHBYDFypTjUjy3XVc0z6HhcQpxjJO6kk0/3zOa4l6M7you39Etv7Zfr5ln0ZVWEZ0qkJRyu8W1pruk9nrr4sW1PJii1LdsujBFGoZesRh1EKsW5JNNx3Sequr69NDMggoxcpRik5WzNKzdlbV89D11GEStjMiAA2mqRumr27UeUYZYpXvZbkcZWJkwPQAFAAAAAAAAAAAIJYWDlnt7XVk4AgaPCWotCriqmWE32Pz2RWZ4aWcs9Xvkl4Xt8jfmg4bG9SHj8E2bXifEKeHpVK1aWWnTi5Tlq7JdEtW+SS3bQljH5lYnBNNPndeehpuH0mqyT+7e/gmvqchD+M+Bz5XQxKhe2fLSenVxU72+PYdzwbiGHxUFicPUjUjJWzR5NfdlF6xktLp2ZVmNzDYgAjQCOvWjCOaTsvNtvZJLd9hWeOkrt0aiit5ey7Lq0pN+V2gkzELoIqM72ad01e62JQoAYThdx1as7tK2ujVn2a306IDMGDh7Sd3azWXSz1Tv1urPzZmAJaWxETU9iLDIABQAAAAAAAAAAAeN2IpTuB7Uka7jE7Qt1a/X6IvGq43LWC73+/IsPO88K/DF7fcn+n1PnH8b8fP12Gw2aSpOmpuN2lKbqNe0ueVQ8Mx9K4O16x/ldvNHH/AMa/RydehRxVGLlOg2pRim5OlUa1ilq3GSjp0lIvlKRw+N0KTlKbUW1D3nFN5YrN7UmvdWm50/oLw7ifrlUwOakppJ1ZW9TKKb1nF3VRLbRN6u1nqdx6C8F/l8HCFSNp1bzqp7+1tGXdCyt1udV6OYVUvVUqa9iEFFXd2oRSSu3u9jn+Z3btiPLt+UmKd0z4230G0rN3dld7XfN25HrJbCx7uVRxTvWoX937Tf8AHZWt25c/xLK3Mq9CM04yV15O62aa1T7Su8A3dSq1JReji3FXXRyjFP46hOYR8N92X4fWTy22tme3Ze5aTJIQSSSSSWyWy7j2wWI1CNbnrjGWV/hd1q1rZrlvo2Z2CQGLprMpc0mlq9m03ptyWvYZgACdEBYIsAACgAAAAAAAB42emFV6ARydzwArKjxbAOtFZZuEotuLV7X7bGlqUcXJ2l6tyiknd6vmnp3nUGixlVqrJrql8EWJeWSserVYrhmJlZqMMy2alb4307zPE8SxMKMqdendu2WV1eyadpSV03ozf0aqkrrxXQ9rUlKLjJXTVmizqY1JWs0nupPLhcP6SUoyUKqqU+rcc1u7K7tHY+juIoVIynRrRqPS9tHFdsXqr9pw3pDg/UTyV456Un9nVS1X9M7bSXVb9N7anDYOrTqesw1WzirxknZ639nTSW3PQxXpscTuGr9fmn9t32cHOeiHpRHGRyztGtFe1FbSX44Lp1XI6MsxpqtotG4CHGVskJyWrS9ldZPSK8W0vEmNbxerrShe125v8tO1n4VJ0mFlpcRX4nDL/uMFJyeVJ4WovatdRX+71bSb8CfDY3iEa+Hp1v5WUKkpKTpQqwlFKnOd1mqSW8Yr+4oYbESp4SvWl6ylKrOcrNyqVoyn7CeillaWSyScYrsRteB4ZqpGLbaoUIwTdtXUave2mZRowf8A1GVittt+ACNgAAEtOREZU3qFTAAigAAAAAAABhV2MzxoCABoFZDncY/tJ/mfzOiOaxD9qf5n8yw88i3wiN5yX9P1RYw2IjNNxezaa5prkyvwZ/af2v5o13o2r4isuWWfnnj+r8ysRbWo923x2DhWhKnUjmjLdfVPk11OE/0b+WqVKTamk1OEra2aaV+ktGtP8H0WdNo5D0i/4iX5IfORaymesa25nCU1iF62nGdKpB39ZC9s3VSW7+J2vDeN1vVRVScZzXvSjBpv+1b96XgW6nDFFJUklFbRWiS/pNTisApX0s+atp4o5cuaZnttx7S7cHTRSO/H+73ieP8Avq29DjkmtIqXSWqVutufwNbxTi8YXrVHeyslFJ6N3yqPfbV9NynOpLSNRuK5uNvaXRvp3aktLhlPfNKa5e1Zf+Nr+Ny1x2tzNuP4/wBs36mtdxWu5878fRroeltSU3GOFhUjduLU6lOVntaGSWZ7J6rY6bgOOy03KpTlGdSbnKN08qsoQjpzVOEL9t9XuVqNGMFaMVFdIpL5GFbEwju9ei1Z0OTvmOW+jxeF7NSXbp9GX0zkKOIU02r+J0fCK2anbnHTw5fp4HLTJPfNLPo3x1nFXJXyugA6HMHsd0eGdNahUoAIoAAAAAAAAAAMZxuRONicAVzmavvS738zrcqOTre9LvfzLDxy+FnhL+1j3P5f4KPowv8Ac1fyz/8AZEs4CqoVISk0km7tuy2a3NHwvjCoVqtRwvfPGN3ZNOSalfXptuah4zMR27930D1Zw/pTFLEyS/BT+cid8UxWJlkpvL2Qajp2ybv5Gqx+BlRqyhNpycYydrvfNze+xYjRlyd1eI4dhhsXCorwkn813rdGdWjGW6v8/MrS4hg8MmqcVKW3sLM/Gb/U1dTi9eu8tGnl/InJ+MnovJGdbevxO3zz/C5jcJCKeaUcvSenl1ObxGMVKV4Zsn3na8V3re3bbQ32H9F6s/arVMrf98vF3t8WYYbDTwUs1alGrC+lVJXj3J+73PzNRp42rM8zGmowlWtXlGF4xctvaUY9z11fYrnR4T0Til9pNt9IaJeL1fwL9bDYfGQzJpv8UdJR7JL6MoKvicHpO9aivvL3or6dz07Sb36NxSK825j3Up4R0W6bW2qa2a6os8OxSpyu/das/wBTc06tHFQ9lp28JRfauXyZo8XhZU5ZZeD5NHzstLY7d0Pt4ctM1O10kJJpNO6ezQbtqzkoYmpTuoSaXw8mWcNha+ItmlLJ+KW39q5s9q9R3ekcvK3R9vM2jTo6M1JXi011Wq6FmMbEeFw8acYwjsv3dkp0RvXLknW+AABAAAAAAAAAAAACvXwubXM/mjzyWtWu6xufssa8vcRiowjKTfuptpb6K+iOCxPFnKclFZfvXeujb/fijtJYF9UyGHDnFWjGKXRWS8jkjq81d92KfomTDF9atpyGGwkqrTlPS6u75mtenI39OjgsPrP2pf1+0/CG3wK3FfR+blCdKFnrfLLKuVna9upBg/Ruqpfa3atvHnLt07zonPusX3MR5jXLmrjmszWK7n38KXF61Co/sKUqbv70Wlfup2aT7VqR/wCm4mbUnnfuq83eVlfSTk721vc6rD8PVP3adu2zv57kvq30fkziy/qeSOKU+73r0cTzefs1+C4NQhrNSqPt0j/2r6tm5pYqMUlGCS6KyXkkVsj6PyPMr6M456/qZ8/06a4MdfSFz+f/AKfiHjU9HHTvKeV9GMr6Mz891Pv/AFDXw6tfi+HJS9Zhm6U+ifsvs7O7YsYH0gd1Srwyzel1s/D9osZX0YdK9nl22027j2p+o5tTFo3+Yec9PWJ3WdfhRx3DY5vWUG6VRdPdf6fLsK9XH1ajjTq02pxv7UVo1prp3cvgbf1cvwvyZ6qMvwvyYjrs9qzW1d/RquKtLxes6ahYWb+752LlB11ZZ8q7Xf8AUu/y8vws9WFn0+KPOuXqN8Vn7S6bZomOdLlKvGyTmm7ava76k0aiezT8TXrBy7PMzjgHza+Z3U6jqp9cf+Py5JrT3XwRUKOXm33/AEJT6FJmY3Mal5yAA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://www.shutterstock.com/image-vector/glyph-illustration-running-delivery-boy-600nw-2621352955.jpg" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    );
}