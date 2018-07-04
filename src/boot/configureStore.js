import MainStore from "../store/DomainStore/HomeStore";
import LoginStore from "../store/ViewStore/LoginViewStore";
import CountersStore from "../store/ViewStore/CountersStore";

export default function() {
	const mainStore = new MainStore();
	const loginForm = new LoginStore();
	const countersStore = new CountersStore();

	return {
		loginForm,
		mainStore,
		countersStore,
	};
}
