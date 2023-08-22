export type ButtonTypes = 'primary' | 'secondary' | 'danger';

export const ButtonVariants: { [key in ButtonTypes]: string } = {
    ['primary']: "bg-indigo-500 hover:bg-indigo-700 text-white",
    ['secondary']: "bg-white border border-slate-500 hover:bg-slate-300 text-slate-500",
    ['danger']: "bg-red-500 hover:bg-red-700 text-white",
};