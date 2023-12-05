import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Logo from '../../../public/fechasDelPaciente_LOGO_SALUD_PLUSremovebgpreview1.png';
import Rectangle from '../../../public/ingresarDoc_Rectangle6.png';
import Rectangle2 from '../../../public/detallesConsultaEnCurso_Rectangle7.png';
import Mapa from '../../../public/Desktop1_image2.png';

export default function Desktop1() {
	const slides = [
		{
			url: 'https://lh3.googleusercontent.com/p/AF1QipOtPr64j8OIM5ifJOK0FpFSISJlEgfb84joE0Rp=w1080-h608-p-no-v0',
		},
		{
			url: 'https://cdn-3.expansion.mx/dims4/default/d9d29fe/2147483647/strip/true/crop/1200x800+0+0/resize/1800x1200!/brightness/-4x3/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F88%2F13%2F82d6fe8a40038f39c3aefb413d97%2Fdr-simi-farmacias-similares-historia.jpg',
		},
		{
			url: 'https://images.adsttc.com/media/images/63fd/0d7a/2b86/6c47/3464/837d/large_jpg/clinica-girona-pmmt_3.jpg?1677528478',
		},
		{
			url: 'https://www.clinicaelrosario.com/images/easyblog_articles/122/062A8086.JPG',
		},
		{
			url: 'https://p.turbosquid.com/ts-thumb/Cf/7j57lc/PrvdsrWf/0/jpg/1565768491/600x600/fit_q87/00c74ef88169224fdb337b6bf7349bcfdc7e3a50/0.jpg',
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div>
			<div className="flex justify-center bg-[#0071ab] py-4">
				<img className="w-12 h-12 object-cover" alt="Logo SALUD PLUS" src={Logo} />
			</div>

			<div className="flex flex-col min-h-screen">
				<div className="relative bg-cover bg-center h-64" style={{ backgroundImage: `url(${Rectangle})`, backgroundSize: 'cover', height: '100vh' }}>
					<div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-black text-center w-2/5">
						<h1 className="font-serif text-customBlue text-5xl font-bold">Bienvenidos/as a  <span className='text-customgray'>SaludPlus</span></h1>
						<p className="text-lg md:text-xl p-2 md:p-4">
							Nos comprometemos a innovar constantemente en nuestros servicios y tecnologías para ofrecer la mejor atención posible. En la Clínica Salud Plus, su salud es nuestra prioridad. Juntos, podemos construir un futuro más saludable para todos.
						</p>

						<div className='flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:space-x-6 sm:mx-auto sm:w-1/2'>
							<Link to='/Login' className='w-full sm:w-auto'>
								<button className="bg-customBlue text-white font-bold py-3 sm:py-6 px-3 sm:px-6 rounded-lg w-full">
									Iniciar doctor
								</button>
							</Link>
							<Link to='/LoginPac' className='w-full sm:w-auto'>
								<button className="bg-customBlue text-white font-bold py-3 sm:py-6 px-3 sm:px-6 rounded-lg w-full">
									Iniciar paciente
								</button>
							</Link>
						</div>




					</div>

					<div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-black text-center w-2/5 sm:block hidden">
						<div className='max-w-full h-[360px] w-full m-auto py-8 px-4 relative group'>
							<div
								style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
								className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
							></div>
							<div className='hidden sm:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-xl rounded-full p-1 bg-black/20 text-white cursor-pointer'>
								<BsChevronCompactLeft onClick={prevSlide} size={20} />
							</div>
							<div className='hidden sm:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-xl rounded-full p-1 bg-black/20 text-white cursor-pointer'>
								<BsChevronCompactRight onClick={nextSlide} size={20} />
							</div>
							<div className='flex top-2 justify-center'>
								{slides.map((slide, slideIndex) => (
									<div
										key={slideIndex}
										onClick={() => goToSlide(slideIndex)}
										className='text-xl cursor-pointer'
									>
										<RxDotFilled />
									</div>
								))}
							</div>
						</div>
					</div>

				</div>

				<div className="relative bg-cover bg-center h-64 sm:block hidden" style={{ backgroundImage: `url(${Rectangle2})`, backgroundSize: 'cover', height: '100vh' }}>
					<div className="absolute top-1/3 left-1/6 w-2/5 text-black text-center flex flex-col justify-center">
						<h1 className="font-serif text-customBlue text-5xl font-bold">Estamos ubicados en <span className='text-customgray'>este punto</span></h1>
					</div>
					<div className='absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 sm:block hidden'>
						<iframe
							title="Google Map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.7696514598221!2d-75.65908182601788!3d4.550934623471476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38f4e4d40c2c43%3A0xa231f926a6158726!2sSaludPlus!5e0!3m2!1ses!2ssv!4v1701492192575!5m2!1ses!2ssv"
							width="600"
							height="450"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>

				<div className="flex flex-col items-center justify-center bg-[#0071ab] py-4">
					<img className="w-12 h-12 object-cover" alt="Logo SALUD PLUS" src={Logo} />
					<div>
						<p className='text-base p-2 text-white text-center'>SaludPlus Cuidando tu bienestar, siempre a tu lado.</p>
						<p className='text-xs text-white text-center'>© 2023 SaludPlus</p>
					</div>
				</div>
			</div>
		</div>
	);
}
