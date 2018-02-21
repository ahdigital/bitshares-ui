import React from "react";
import { Link } from "react-router/es";

class SidebarMenu extends React.Component {

    render() {

        // const _showDeposit = this.props.showDeposit;
        // const _showSend = this.props.showSend;
        // const enableDepositWithdraw = this.props.enableDepositWithdraw;
        const navigate = this.props.navigate;
        const tradeUrl = this.props.tradeUrl;
        // const currentAccount = this.props.currentAccount;

        return(
            <nav id="mp-menu" className="mp-menu">
                <div className="mp-level">
                    <h2>Menu</h2>
                    <ul>
                        <li>
                            <a href="#">Dashboard</a>
                            <div className="mp-level">
                                <h2>Dashboard</h2>
                                <a className="mp-back" href="#">back</a>
                                <ul>
                                    <li><Link to="">Portfolio</Link></li>
                                    <li><Link to="">Open orders</Link></li>
                                    <li><Link to="">Margin positions</Link></li>
                                    <li><Link to="">Activity</Link></li>
                                </ul>
                            </div>
                        </li>
                        {/*<li><Link onClick={_showSend}>Send</Link></li>*/}
                        {/*<li><Link onClick={!enableDepositWithdraw ? () => { } : _showDeposit}>Deposit</Link></li>*/}
                        {/*<li><Link onClick={!enableDepositWithdraw ? () => { } : this.props.navigate("/deposit-withdraw")}>Withdraw</Link></li>*/}
                        <li>
                            <a href="#">Settings</a>
                            <div className="mp-level">
                                <h2>Settings</h2>
                                <a className="mp-back" href="#">back</a>
                                <ul>
                                    <li><Link to="/settings/general">General</Link></li>
                                    <li><Link to="/settings/wallet">Local wallet</Link></li>
                                    <li><Link to="/settings/accounts">Accounts</Link></li>
                                    <li><Link to="/settings/password">Password</Link></li>
                                    <li><Link to="/settings/backup">Backup</Link></li>
                                    <li><Link to="/settings/restore">Restore</Link></li>
                                    <li><Link to="/settings/access">Access</Link></li>
                                    <li><Link to="/settings/faucet_address">Faucet</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/help/introduction/bitshares">Help</Link></li>
                        <li><Link to={tradeUrl}>Exchange</Link></li>
                        <li>
                            <a href="#">Explore</a>
                            <div className="mp-level">
                                <h2>Explore</h2>
                                <a className="mp-back" href="#">back</a>
                                <ul>
                                    <li><Link to="/explorer/blocks">Blockchain</Link></li>
                                    <li><Link to="/explorer/assets">Assets</Link></li>
                                    <li><Link to="/explorer/accounts">Accounts</Link></li>
                                    <li><Link to="/explorer/witnesses">Witnesses</Link></li>
                                    <li><Link to="/explorer/committee-members">Committee</Link></li>
                                    <li><Link to="/explorer/markets">Markets</Link></li>
                                    <li><Link to="/explorer/fees">Fees</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">Advanced</a>
                            <div className="mp-level">
                                <h2>Advanced</h2>
                                <a className="mp-back" href="#">back</a>
                                <ul>
                                    <li>
                                        <a href="#">Voting</a>
                                        <div className="mp-level">
                                            <h2>Voting</h2>
                                            <a className="mp-back" href="#">back</a>
                                            <ul>
                                                <li><Link to="">Witnesses</Link></li>
                                                {/*<li><Link onClick={this.props.navigate(`/account/${currentAccount}/voting`)}>Witnesses</Link></li>*/}
                                                <li><Link to="">Committee</Link></li>
                                                <li><Link to="">Workers</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to="">Assets</Link></li>
                                    {/*<li><Link onClick={this.props.navigate(`/account/${currentAccount}/assets`)}>Assets</Link></li>*/}
                                    <li>
                                        <a href="#">Signed messages</a>
                                        <div className="mp-level">
                                            <h2>Signed messages</h2>
                                            <a className="mp-back" href="#">back</a>
                                            <ul>
                                                <li><Link to="">Sign message</Link></li>
                                                <li><Link to="">Verify message</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to="">Assets</Link></li>
                                    {/*<li><Link onClick={this.props.navigate(`/account/${currentAccount}/vesting`)}>Assets</Link></li>*/}
                                    <li>
                                        <a href="#">Whitelist</a>
                                        <div className="mp-level">
                                            <h2>Whitelist</h2>
                                            <a className="mp-back" href="#">back</a>
                                            <ul>
                                                <li><Link to="">Whitelist</Link></li>
                                                <li><Link to="">Blacklist</Link></li>
                                                <li><Link to="">Whitelisted by</Link></li>
                                                <li><Link to="">Blacklisted by</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Permissions</a>
                                        <div className="mp-level">
                                            <h2>Permissions</h2>
                                            <a className="mp-back" href="#">back</a>
                                            <ul>
                                                <li><Link to="">Active permissions</Link></li>
                                                <li><Link to="">Owner permissions</Link></li>
                                                <li><Link to="">Memo key</Link></li>
                                                <li><Link to="">Cloud wallet</Link></li>
                                            </ul>
                                        </div>
                                    </li>                                    
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">Accounts</a>
                            <div className="mp-level">
                                <h2>Accounts</h2>
                                <a className="mp-back" href="#">back</a>
                                <ul>
                                    <li><Link to="">Accounts</Link></li>                               
                                    <li><Link to="">Contacts</Link></li>                               
                                    <li><Link to="">Recent activity</Link></li> 
                                    <li>
                                        <a href="#">Switch</a>
                                        <div className="mp-level">
                                            <h2>Switch account</h2>
                                            <a className="mp-back" href="#">back</a>
                                            <ul>
                                                <li><Link to="">Account #1</Link></li>
                                                <li><Link to="">Account #2</Link></li>
                                            </ul>
                                        </div>
                                    </li>                              
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )

    }
}

export default SidebarMenu;