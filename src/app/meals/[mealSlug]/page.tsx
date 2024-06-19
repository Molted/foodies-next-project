import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "../../../../lib/meals";
import { MealProps } from "@/components/meals/meal-item";

interface MealDetailsProps {
	params: {
		mealSlug: string;
	};
}

export default function MealDetailsPage({ params }: MealDetailsProps) {
	const meal = getMeal(params.mealSlug) as MealProps;

	meal.instructions = meal.instructions.replace(/\n/g, "<br />");
	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					{<Image src={meal.image as string} alt={meal.title} fill />}
				</div>
				<div className={classes.headerText}>
					<h1>{meal.title}</h1>
					<p className={classes.creator}>
						by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={classes.summary}>{meal.summary}</p>
				</div>
			</header>
			<main>
				<p
					className={classes.instructions}
					dangerouslySetInnerHTML={{
						__html: meal.instructions,
					}}
				></p>
			</main>
		</>
	);
}
