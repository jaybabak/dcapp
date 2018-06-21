import HomeStore from "./HomeStore";
import data from "../../container/HomeContainer/data.json";

describe("HomeStore", () => {
	it("should handle FETCH_LIST_SUCCESS", () => {
		const store = new HomeStore();
		store.fetchItems(data);
		const expectedArray = [
			"Sign up as consumer",
			"Sign up as business"	,
		];
		var actualJSON = JSON.stringify(store.items);
		var expectedJSON = JSON.stringify(expectedArray);
		expect(expectedJSON).toEqual(actualJSON);
	});
});
