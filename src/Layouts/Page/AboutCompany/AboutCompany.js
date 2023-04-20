import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div>
            <div className='row d-flex justify-content-between gap-5 mx-5'>
            <Heading/> {/* Заголовок и кнопка справа */}
             <div className='col'><General/>  {/* Основная информация вроде названия, типа и телефона */}</div>
            <div className='col'><Addresses/> {/* Список доступных адресов заведений */}</div>
            </div>
        </div>
        
    );
}

export default AboutCompany;