export interface Props {
    title: string;
    columns: Array<{
        column: string;
    }>;
    rows: Array<{
        row: Array<{
            value: string;
        }>;
    }>;
}

export default function MeasurementModal(
    {
        title,
        columns,
        rows,
    }: Props,
) {
    return (
        <div>
            <label for="my-modal-4" class="btn">Medidas</label>
            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative p-0">
                    <label for="my-modal-4" class="btn btn-sm bg-transparent border-b-slate-500 btn-circle absolute right-2 top-2">x</label>
                    <div class="grid grid-flow-col">
                        <div class="w-20 bg-neutral-300"></div>
                        <div class="p-5">
                            <h2 class="text-2xl font-bold">{title}</h2>
                            <p class="py-4">Compare suas medidas com a deste produto:</p>
                            <table>
                                <thead>
                                    <tr class="font-light">
                                        {columns.map(({
                                            column,
                                        }) => <th class="p-2">{column}</th>)}
                                    </tr>
                                </thead>
                                <tbody class="font-light">
                                        {rows.map(({
                                            row,
                                        }) => <tr> {row.map(({
                                            value,
                                        }) => <td class="p-2">{value}</td>)} </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}