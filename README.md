# Insurance Premium Calculator

A simple Angular application to calculate insurance premiums based on user details like name, age, date of birth, occupation, and sum insured.

---

## **Features**
- Input user details: Name, Age , Date of Birth, Occupation, and Death Sum Insured.
- Calculates monthly insurance premium based on predefined occupation rating factors.
- UI with Bootstrap styling.

---

## **Technologies Used**
- Angular 10+
- TypeScript
- Bootstrap (styling)
- RxJS (observables)
- HTTPClient for API integration (when conneting to backend)

---

## **Assumptions**
1. Occupation ratings are predefined and fixed in the frontend (e.g., Doctor = Professional, Cleaner = Light Manual).
2. Age next birthday and sum insured cannot be zero or negative.
3. Premium calculation logic to be handled by a backend API (`Calling RESTful Service`) returning a JSON object `{ monthlyPremium: number }`.

---

## **Clarifications**
1. `ngModel` is used for two-way binding of form inputs.
2. Template driven form is used to design the form.
3. Backend API wil get called once changing the DropDown of Occupation.
4. Injecting service using DI to reuse logic.
5. CORS must be enabled on the backend if accessing API from `localhost:4200`.
6. This project assumes Angular CLI is installed and Node.js environment is set up.

---

## **Setup and Run**
1. Clone the repository:
```bash
git clone https://github.com/taraka-343/InsurancePremiumCalculatorUI.git
