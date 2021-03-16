import { useActions } from '../hooks/use-actions';
import '../styles/action-bar.css'
interface ActionBarProps {
	id: string;
}
const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
	const { moveCell, deleteCell } = useActions();
	const buttonContent = (name: string) => {
		let cn = '';
		if (name === 'up') cn = 'fas fa-arrow-up';
		else if (name === 'down') cn = 'fas fa-arrow-down';
		else cn = 'fas fa-times';
		return (
			<span className="icon">
				<i className={cn} />
			</span>
		);
	};
	return (
		<div className='action-bar'>
			<button className="button is-primary is-small" onClick={() => moveCell(id, 'up')}>
				{buttonContent("up")}
			</button>
			<button className="button is-primary is-small" onClick={() => moveCell(id, 'down')}>
				{buttonContent("down")}
			</button>
			<button className="button is-primary is-small" onClick={() => deleteCell(id)}>
				{buttonContent("delete")}
			</button>
		</div>
	);
};

export default ActionBar;
