import './index.css';

import SAVED_CARDS_OPTIONS from '../../js/constans/savedCardsOptions';
import MAIN_API_URL from '../../js/constans/mainUrl';
import SAVED_HEADER_OPTIONS from '../../js/constans/savedHeaderOptions';
import SavedNewsCard from '../../js/components/SavedNewsCard';
import MainApi from '../../js/api/MainApi';
import SavedNewsCardList from '../../js/components/SavedNewsCardList';
import SavedHeader from '../../js/components/savedHeader';



const mainApi = new MainApi(MAIN_API_URL);
const savedNewsCard = new SavedNewsCard(mainApi, SAVED_CARDS_OPTIONS);
const savedNewsCardList = new SavedNewsCardList(SAVED_CARDS_OPTIONS, mainApi, savedNewsCard)
const savedHeader = new SavedHeader(SAVED_HEADER_OPTIONS, mainApi)
