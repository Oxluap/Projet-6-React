import Banner from '../../components/Banner';
import homeBanner from '../../assets/homeBanner.png';

function HomePage() {
   return (
      <div>
         <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />
      </div>
   );
}

export default HomePage;
