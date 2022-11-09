import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType('blocks-course/team-member', {
	title: __('Team Member', 'team-members'),
	description: __('A team member item', 'team-members'),
	icon: 'admin-users',
	parent: ['blocks-course/team-members'],
	edit: () => {
		return <div>Team Member from edit</div>;
	},
	save: () => {
		return <div>Team Member from save</div>;
	},
});
