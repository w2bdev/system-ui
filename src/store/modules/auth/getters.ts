import { GetterTree } from 'vuex';
import { IAuth, IRoot } from '@/interfaces';

const gettersImp: GetterTree<IAuth, IRoot> = {
    isAuth: (state: IAuth) => () => {
        // Todo: implement the true authorization
        return state.loggedIn;
    },
};
export default gettersImp;
