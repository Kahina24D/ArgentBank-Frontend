import Banner from "../../components/Banner/Banner";
import Feature from "../../components/Features/Feature";
import { FeaturesData } from "../../data/FeaturesData";
import Iconchat from "../../asset/icon-chat.png";
import iconmoney from "../../asset/icon-money.png";
import iconsecurity from "../../asset/icon-security.png";
import "./home.css"
export function Home() {
    const imagData = {
        "icon-chat.png": Iconchat,
        "icon-money.png": iconmoney,
        "icon-security.png": iconsecurity,
    };

    return (
        <div className="homepage">
            <Banner />
            <section className="features">
                {FeaturesData.map((data) => (
                    <Feature
                        key={data.id}
                        image={imagData[data.image]} // Access the correct image using the key
                        title={data.title}
                        descriptionImage={data.description} // Correct the prop name
                        description={data.description}
                    />
                ))}
            </section>
        </div>
    );
}
