import MainStore from "../store/DomainStore/HomeStore";
import LoginStore from "../store/ViewStore/LoginViewStore";
import CountersStore from "../store/ViewStore/CountersStore";
import SignUpStore from "../store/ViewStore/SignUpStore";

export default function() {
	const mainStore = new MainStore();
	const loginForm = new LoginStore();
	const countersStore = new CountersStore();
	const signUpStore = new SignUpStore();

	return {
		loginForm,
		mainStore,
		countersStore,
		signUpStore,
	};
}
