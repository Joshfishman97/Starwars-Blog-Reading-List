import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			addFavorite: item => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const favorites = [...store.favorites, item];

				//reset the global store
				setStore({ favorites });
			},
			deleteFavorite: item => {
				const favorites = getStore().favorites;
				const arrayOfFavorites = favorites.filter(element => element != item);
				setStore({ favorites: arrayOfFavorites });
			}
		}
	};
};

export default getState;
