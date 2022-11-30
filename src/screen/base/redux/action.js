import { setListSection } from "./reducer";

const getActiveSection = async (store)=>{
    store.dispatch(setListSection());
}

const getSelectedSection = async(store, selectedSection) => {
    store.dispatch(setListSection(selectedSection));
}

const Action = {
    getActiveSection,
    getSelectedSection
}

export default Action;