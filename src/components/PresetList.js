import '../styles/PresetList.css';
import Preset from './Preset';

function PresetList() {
    return (
        <div className="preset__list">
            <Preset name="No effects"/>
            <Preset name="Grayscale"/>
            <Preset/>
            <Preset/>
            <Preset/>
            <Preset/>
            <Preset/>
            <Preset/>
            <Preset/>
        </div>
    );
}

export default PresetList;