import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';

class ChannelSection extends React.Component {
  constructor(props) {
    super(props);

    this.buildMemberList = this.buildMemberList.bind(this);
    this.openUserActionMenu = this.openUserActionMenu.bind(this);

    this.createChannel = this.createChannel.bind(this);
    this.leaveChannel = this.leaveChannel.bind(this);
  }

  createChannel() {
    // open the create channel modal
  }

  leaveChannel() {
    // check if the channel is general
    // remove the subscription on the db
    // remove the channel for the current user
    // set general as the current channel
  }

  openUserActionMenu(user) {
    return (e) => {
      e.preventDefault();
      console.log(user);
    };
  }

  buildMemberList() {
    if (this.props.channel.users) {
      return this.props.channel.users.map((user, i) => (
        <button className='user-action-btn' key={i}
                onClick={ this.openUserActionMenu(user) }>
          <li className='user-action-item'>
            <img src={ user.photo_url }/>
            <p>{ user.username }</p>
          </li>
        </button>
      ));
    }
  }

  render() {
    return (
      <section className='channel-section'>
        <section className='channel-action-container'>
          <button className='channel-action-create-btn'>Create Channel</button>
          <button className='channel-action-leave-btn'>Leave Channel</button>
        </section>

        <section className='channel-container'>
          <section className='channel-name'>
            <h2>About #{this.props.channel.name}</h2>
          </section>

          <section className='channel-details'>
            <h3>Channel Details</h3>
            <div className='channel-description'>
              <h4>Description</h4>
              <p>{ this.props.channel.description }</p>
            </div>
            <div className='channel-information'>
              Created on { this.props.channel.createdAt }
            </div>
          </section>

          <section className='channel-members'>
            <h3>{ this.props.channel.userCount } Members</h3>
            <ul className='channel-members-list'>
              { this.buildMemberList() }
            </ul>
          </section>
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  channel: state.channel
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ChannelSection));
