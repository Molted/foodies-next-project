"use server";

import { MealProps } from "@/components/meals/meal-item";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

export async function createMeal(formData: FormData) {
	const meal = {
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
		creator: formData.get("name"),
		creator_email: formData.get("email"),
	};

	await saveMeal(meal as MealProps);
	redirect("/meals");
}
