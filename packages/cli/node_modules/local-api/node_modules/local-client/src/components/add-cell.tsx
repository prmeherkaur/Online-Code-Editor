import '../styles/add-cell.css';
import { useActions } from '../hooks/use-actions';
interface AddCellProps {
	prevCellId: string | null;
    forceVisible?: Boolean;
}
const AddCell: React.FC<AddCellProps> = ({ prevCellId,forceVisible }) => {
	const { insertCellAfter } = useActions();
	return (
		<div className={`add-cell ${forceVisible && 'visible'}`}>
			<div className="add-buttons">
				<button
					className="button is-rounded is-primary is-small"
					onClick={() => insertCellAfter(prevCellId, 'text')}
				>
					<span className="icon is-small">
						<i className="fas fa-plus" />
					</span>
					<span>Text</span>
				</button>
				<button
					className="button is-rounded is-primary is-small"
					onClick={() => insertCellAfter(prevCellId, 'code')}
				>
					<span className="icon is-small">
						<i className="fas fa-plus" />
					</span>
					<span>Code</span>
				</button>
			</div>
			<div className="divider" />
		</div>
	);
};

export default AddCell;
