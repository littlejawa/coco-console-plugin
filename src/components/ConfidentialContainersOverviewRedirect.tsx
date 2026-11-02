import type { FC } from 'react';
import { Navigate, useLocation } from 'react-router';

/**
 * The console marks a nav item active on a segment-prefix match, so an Overview nav item
 * pointing at "/confidential-containers" is also highlighted on every
 * "/confidential-containers/*" page. The Overview nav item therefore targets
 * "/confidential-containers/overview" (not a prefix of any sibling), and this route keeps
 * legacy "/confidential-containers" links working.
 */
const ConfidentialContainersOverviewRedirect: FC = () => {
  const { search, hash } = useLocation();
  return <Navigate to={`/confidential-containers/overview${search}${hash}`} replace />;
};

export default ConfidentialContainersOverviewRedirect;
