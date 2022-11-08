import { SyntheticEvent, useState } from 'react';

export function Form() {
    const initialForm = {
        name: '',
        family: '',
        age: 0,
        image: '',
    };

    const [form, setForm] = useState(initialForm);

    const handleClick = (ev: SyntheticEvent) => {
        ev.preventDefault();
        console.log(form);
    };

    const handleForm = (ev: SyntheticEvent) => {
        const target = ev.target as HTMLFormElement;
        setForm({
            ...form,
            [target.name]: target.value,
        });
    };

    return (
        <>
            <form>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    value={form.name}
                    onInput={handleForm}
                />
                <input
                    type="text"
                    name="family"
                    id="family"
                    placeholder="family"
                    value={form.family}
                    onInput={handleForm}
                />
                <input
                    type="number"
                    name="age"
                    id="age"
                    placeholder="age"
                    value={form.age}
                    onInput={handleForm}
                />
                <input
                    type="text"
                    name="image"
                    id="image"
                    placeholder="image URL"
                    value={form.image}
                    onInput={handleForm}
                />
                <button type="submit" onClick={handleClick}>
                    SEND
                </button>
            </form>
        </>
    );
}
